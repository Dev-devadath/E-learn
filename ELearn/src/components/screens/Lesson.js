import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Tick from '../../Assets/images/compleated.svg';
import Lock from '../../Assets/images/lock.svg';
import Arrow from '../../Assets/images/drop-down.svg';

const LessonScreen = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  useEffect(() => {
    // Fetch lessons with sections from API or local storage
    // For now, let's use sample data
    const fetchedLessons = [
      {
        lessonName: 'Lesson 1',
        sections: [
          {id: 1, name: 'Introduction', time: '00:00', completed: true},
          {id: 2, name: 'Chapter 1', time: '05:00', completed: false},
          {id: 3, name: 'Chapter 2', time: '10:30', completed: false},
          {id: 4, name: 'Conclusion', time: '15:45', completed: false},
        ],
      },
      {
        lessonName: 'Lesson 2',
        sections: [
          {id: 5, name: 'Introduction2', time: '00:00', completed: true},
          {id: 6, name: 'Chapter 3', time: '05:00', completed: false},
          {id: 7, name: 'Chapter 4', time: '10:30', completed: false},
        ],
      },
      {
        lessonName: 'Lesson 3',
        sections: [
          {id: 8, name: 'Introduction3', time: '00:00', completed: true},
          {id: 9, name: 'Chapter 5', time: '05:00', completed: false},
          {id: 10, name: 'Chapter 6', time: '10:30', completed: false},
          {id: 11, name: 'Conclusion2', time: '15:45', completed: false},
        ],
      },
    ];
    setLessons(fetchedLessons);
    // Initialize completed sections state
    const initialCompletedSections = fetchedLessons.reduce(
      (acc, lesson) =>
        acc.concat(lesson.sections.filter(section => section.completed)),
      [],
    );
    setCompletedSections(initialCompletedSections);
    // Set the first section of the first lesson as current section initially
    setCurrentSection(fetchedLessons[0].sections[0]);
  }, []);

  // Function to toggle selected lesson
  const toggleLesson = lessonName => {
    setSelectedLesson(selectedLesson === lessonName ? null : lessonName);
  };

  // Function to select a section
  const selectSection = section => {
    setCurrentSection(section);
  };

  // Function to mark a section as completed
  const markAsCompleted = () => {
    if (currentSection) {
      const currentLesson = lessons.find(lesson =>
        lesson.sections.includes(currentSection),
      );
      if (currentLesson) {
        const currentIndex = currentLesson.sections.findIndex(
          s => s === currentSection,
        );
        if (currentIndex < currentLesson.sections.length - 1) {
          const nextSection = currentLesson.sections[currentIndex + 1];
          nextSection.completed = true;
          setCompletedSections(prevCompletedSections => [
            ...prevCompletedSections,
            nextSection,
          ]);
          setCurrentSection(nextSection);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        resizeMode="cover"
        controls
      />
      {currentSection && (
        <View style={styles.lessonDetails}>
          <Text style={styles.sectionName}>{currentSection.name}</Text>
          <TouchableOpacity
            style={styles.markCompletedButton}
            onPress={markAsCompleted}>
            <Tick width={22} height={22} marginRight={5} />
            <Text style={styles.markCompletedText}>Mark as Completed</Text>
          </TouchableOpacity>
        </View>
      )}
      {lessons.map(lesson => (
        <View key={lesson.lessonName}>
          <TouchableOpacity
            onPress={() => toggleLesson(lesson.lessonName)}
            style={styles.lessonItem}>
            <Text style={styles.lessonText}>{lesson.lessonName}</Text>
            <Arrow />
          </TouchableOpacity>
          {selectedLesson === lesson.lessonName &&
            lesson.sections.map(section => (
              <TouchableOpacity
                key={section.id}
                style={[
                  styles.sectionItem,
                  currentSection === section &&
                    !completedSections.includes(section) &&
                    styles.selectedSection,
                  completedSections.includes(section) &&
                    styles.completedSection,
                ]}
                onPress={() => selectSection(section)}
                disabled={
                  !completedSections.includes(section) &&
                  lesson.sections.findIndex(s => s === section) >
                    lesson.sections.findIndex(s =>
                      completedSections.includes(s),
                    )
                }>
                {completedSections.includes(section) ? (
                  <Tick width={20} height={20} />
                ) : (
                  <Lock width={20} height={20} />
                )}
                <Text style={styles.sectionText}>
                  {section.completed || completedSections.includes(section)
                    ? section.name
                    : section.name}
                </Text>
                <Text style={styles.sectionTime}>{section.time}</Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
    overflow: 'hidden',
  },
  lessonDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    width: '100%',
  },
  sectionName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  markCompletedButton: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6e61e7',
  },
  markCompletedText: {
    color: '#6e61e7',
    fontWeight: '500',
    fontSize: 16,
  },
  lessonItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    width: '90%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionDropdown: {
    marginTop: 10,
    alignItems: 'center',
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '85%',
    height: 50,
  },
  selectedSection: {
    backgroundColor: '#6e61e7',
  },
  completedSection: {
    color: '#fff',
  },
  sectionText: {
    color: '#000',
    fontSize: 16,
    marginRight: 'auto',
    marginLeft: 10,
  },
  sectionTime: {
    color: '#000',
  },
});

export default LessonScreen;
