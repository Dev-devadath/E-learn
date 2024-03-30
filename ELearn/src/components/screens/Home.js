import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import NotificationIcon from '../../Assets/images/notification.svg';
import PlayIcon from '../../Assets/images/white-play-button.svg';
import ProgressBar from 'react-native-progress/Bar';
import Carousel from 'react-native-snap-carousel';
import {globalData} from './globals';

const Home = () => {
  const carouselData = [
    {
      title: '3D Art & Illustration',
      subtitle: 'Ongoing',
      image: require('../../Assets/images/3d-art-illution.png'),
      backgroundColor: '#6e61e7',
      progress: 0.5,
      progressValue: '50%',
    },
    {
      title: 'Maths',
      subtitle: 'Ongoing',
      image: require('../../Assets/images/maths.png'),
      backgroundColor: '#6e61e7',
      progress: 0.8,
      progressValue: '80%',
    },
    {
      title: 'UIUX',
      subtitle: 'Ongoing',
      image: require('../../Assets/images/ui-ux.png'),
      backgroundColor: '#6e61e7',
      progress: 0.3,
      progressValue: '30%',
    },
    {
      title: 'Python',
      subtitle: 'Ongoing',
      image: require('../../Assets/images/derivation.png'),
      backgroundColor: '#6e61e7',
      progress: 1,
      progressValue: '100%',
    },
  ];

  const gridData = [
    {
      title: 'UI/UX Design',
      subtitle: '03 Classes',
      image: require('../../Assets/images/ui-ux.png'),
      backgroundColor: '#6e61e7',
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      image: require('../../Assets/images/derivation.png'),
      backgroundColor: '#84E9F4',
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      image: require('../../Assets/images/photoshop.png'),
      backgroundColor: '#63b0e8',
    },
    {
      title: 'Title 4',
      subtitle: 'Subtitle 4',
      image: require('../../Assets/images/bussiness.png'),
      backgroundColor: '#fe6f99',
    },
  ];
  const lectureData = {
    subject: 'Maths',
    subtitle: 'Running...',
    progress: 0.3,
  };

  const renderCarouselItem = ({item, index}) => {
    return (
      <View
        style={[styles.carouselItem, {backgroundColor: item.backgroundColor}]}>
        <View style={styles.leftContent}>
          <Text style={styles.carouselSubtitle}>{item.subtitle}</Text>
          <Text style={styles.carouselTitle}>{item.title}</Text>
          <Text style={styles.ProgressVal}>{item.progressValue}</Text>
          <ProgressBar
            style={styles.progress}
            progress={item.progress}
            width={150}
            height={8}
            borderRadius={10}
            color={'#fff'}
            unfilledColor={'#8689f2'}
            borderWidth={0}
          />
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Headercontainer}>
        <View style={styles.left}>
          <Image
            source={require('../../Assets/images/person.jpg')}
            style={styles.avatar}
          />
          <View style={styles.HeadertextContainer}>
            <Text style={styles.greeting}>Hey,{globalData.userName} 👋</Text>
            <Text style={styles.subtext}>let's get started</Text>
          </View>
        </View>
        <TouchableOpacity>
          <NotificationIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <Carousel
        data={carouselData}
        renderItem={renderCarouselItem}
        sliderWidth={400}
        itemWidth={400}
        layout={'default'}
      />
      <View style={styles.gridContainer}>
        <Text style={styles.gridHeading}>Choose Your Course</Text>
        <View style={styles.grid}>
          {gridData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, {backgroundColor: item.backgroundColor}]}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.cardContent}>
                <View style={styles.cardContentTitles}>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  <TouchableOpacity style={styles.playIcon}>
                    <PlayIcon width={22} height={22} />
                  </TouchableOpacity>
                </View>
                <Image source={item.image} style={styles.cardImage} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.lectureContainer}>
        <Text style={styles.lectureHeading}>Today's Lecture</Text>
        <View style={styles.lectureCard}>
          <View style={styles.lectureIconContainer}>
            <View style={[styles.lectureIcon, {backgroundColor: '#6e61e7'}]}>
              <Image
                source={require('../../Assets/images/maths.png')}
                style={styles.lectureImage}
              />
            </View>
          </View>
          <View style={styles.lectureContent}>
            <View>
              <Text style={styles.lectureSubject}>{lectureData.subject}</Text>
              <Text style={styles.lectureSubtitle}>{lectureData.subtitle}</Text>
            </View>
            <ProgressBar
              progress={lectureData.progress}
              width={150}
              height={8}
              borderRadius={10}
              color={'#6e61e7'}
              unfilledColor={'#d9e5fc'}
              borderWidth={0}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = {
  container: {
    flex: 1,
  },
  Headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 15,
    marginLeft: -5,
  },
  HeadertextContainer: {
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
  },
  carouselItem: {
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    marginLeft: 5,
    width: 400,
  },
  leftContent: {
    flex: 1,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  carouselSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  progress: {
    position: 'relative',
    bottom: 15,
    left: 40,
  },
  ProgressVal: {
    color: '#fff',
    fontSize: 16,
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#8689f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '50%',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  carouselImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  gridContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  gridHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -10,
  },
  card: {
    width: '49%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    padding: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardContentTitles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
  playIcon: {},
  lectureContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  lectureHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lectureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  lectureIconContainer: {
    padding: 10,
  },
  lectureIcon: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#6e61e7',
  },
  lectureImage: {
    width: 50,
    height: 50,
  },
  lectureContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  lectureSubject: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  lectureSubtitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#6e61e7',
    marginBottom: 2,
  },
};
