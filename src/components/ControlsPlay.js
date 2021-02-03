import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Image, Modal, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import TrackPlayer, {useTrackPlayerProgress} from 'react-native-track-player';
import {Slider} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;
const BackContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
const BotaoBack = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;
const BotaoBackTitle = styled.Text`
    color: #7f7f7f;
    font-family: 'Poppins-SemiBold';
    font-size: 13px;
    padding-top: 6px;
`;

const ImageContainer = styled.View`
    height: 250px;
    width: 65%;
    background-color: red;
    border-radius: 20px;
    elevation: 20;
    overflow: hidden;
`;
const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
const Title = styled.Text`
    font-size: 22px;
    color: #0d0a1e;
    font-family: 'Poppins-Bold';
`;

const ControllersContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    align-items: center;
`;
const BottonControll = styled.TouchableOpacity``;

const ContainerPlay = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 0 55px;
    justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;
const BottonPlay = styled.TouchableOpacity`
    background-color: #ff2d55;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    elevation: 2;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
`;
const Minutes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-top: -30px;
`;
const MinutesText = styled.Text`
    font-size: 9px;
    font-family: 'Poppins-SemiBold';
    color: #ff2d55;
`;

const ImageModal = styled.View`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    elevation: 4;
    overflow: hidden;
`;

const TextControll = styled.View`
    /* text-align: left; */
    flex: 1;
    padding-left: 10px;
`;
const TextoModalHeader = styled.Text`
    font-size: 14px;
    font-family: 'Poppins-SemiBold';
    color: #0e0b1e;
`;
const Linha = styled.View`
    height: 1px;
    width: 100%;
    background-color: #7f7f7f86;
`;
const ButtomClose = styled.TouchableOpacity``;
const ModalBody = styled.View`
    /* height: 200px; */
    width: 100%;
    padding: 20px;
    flex: 1;
    height: 100%;
    /* background-color: red; */
`;
const ModalBodyBody = styled.View`
    /* height: 200px; */
    width: 100%;
    height: 250px;
    padding: 20px;
    background-color: #fff;
    border-radius: 18px;
    elevation: 2;
`;

export default ({data}) => {
    const modalizeRef = useRef(null);
    const {position, duration} = useTrackPlayerProgress();
    const navigation = useNavigation();
    const music = {
        id: '1',
        music_album: 17,
        url:
            'https://github.com/moser-jose/moska/releases/download/vMusics/17.Saturday.Nights.mp3',
        title: 'Saturday Nights',
        artist: 'Khalid',
        artist_ft: 'Khalid',
        album: 'Free Spirit',
        genre: [
            {
                name: 'R&B',
            },
            {
                name: 'Soul',
            },
        ],
        date: '2018-05-20T07:00:00+00:00',
        artwork:
            'https://upload.wikimedia.org/wikipedia/pt/6/6c/Free_Spirit_de_Khalid.png',
        artwork_artist:
            'https://static.wikia.nocookie.net/wherearetheavocados/images/f/f1/Khalid.jpg/revision/latest?cb=20180419233016',
        artwork_artist_cover:
            'https://3.bp.blogspot.com/-dWpHykfIXAc/XI0Cetfk_hI/AAAAAAAAedA/zfT7wrEX5SUSsR0ACCbRGK8pt8ffxpjDQCLcBGAs/s1600/khalid-2018-cr-RoLexx-billboard-1548.jpg',
    };
    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    };
    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    };
    useEffect(() => {
        (async () => {
            await TrackPlayer.setupPlayer().then(() => {
                console.log('ready');
            });
            await TrackPlayer.add([music]);
            TrackPlayer.updateOptions({
                /*
                stopWithApp: false,
                alwaysPauseOnInterruption: false, */
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                ],
            });
        })();
        TrackPlayer.play();
        setTimeout(() => {
            TrackPlayer.stop();
        }, 5000);
        /* return () => {
            TrackPlayer.destroy();
        };*/
    }, []);
    return (
        <>
            <Container>
                <BackContainer>
                    <BotaoBack onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            name="expand-more"
                            color="#7F7F7F"
                            size={35}
                        />
                    </BotaoBack>
                    <BotaoBackTitle>TOCANDO AGORA</BotaoBackTitle>
                    <BotaoBack onPress={onOpen}>
                        <Ionicons
                            name="ellipsis-horizontal"
                            color="#7F7F7F"
                            size={28}
                        />
                    </BotaoBack>
                </BackContainer>
                <ImageContainer>
                    <Image
                        source={require('../assets/img/khalid.png')}
                        style={{width: '100%', height: '100%'}}
                    />
                </ImageContainer>
                <TitleContainer>
                    <Title>Saturday Nights</Title>
                    <Title
                        style={{
                            fontSize: 17,
                            fontFamily: 'Poppins-SemiBold',
                            color: '#686868',
                        }}>
                        Khalid
                    </Title>
                </TitleContainer>
                <Slider
                    style={{
                        width: '80%',
                        height: 40,
                    }}
                    value={position}
                    maximumValue={duration}
                    minimumTrackTintColor="#FF2D55"
                    maximumTrackTintColor="#FFBFCB"
                    thumbTintColor="#FF2D55"
                    thumbStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                    }}
                    trackStyle={{height: 4, borderRadius: 2}}
                    onValueChange={(val) => TrackPlayer.seekTo(val)}
                />
                <Minutes>
                    <MinutesText>{formatTime(position)}</MinutesText>
                    <MinutesText>{formatTime(duration)}</MinutesText>
                </Minutes>
                <ContainerPlay>
                    <Button>
                        <MaterialIcons
                            name="replay-30"
                            color="#0D0A1E"
                            size={25}
                        />
                    </Button>
                    <Button>
                        <Ionicons name="play-back" color="#0D0A1E" size={35} />
                    </Button>
                    <Button>
                        <BottonPlay>
                            <Ionicons name="play" color="#fff" size={40} />
                        </BottonPlay>
                    </Button>
                    <Button>
                        <Ionicons
                            name="play-forward"
                            color="#0D0A1E"
                            size={35}
                        />
                    </Button>
                    <Button>
                        <MaterialIcons
                            name="forward-30"
                            color="#0D0A1E"
                            size={25}
                        />
                    </Button>
                </ContainerPlay>
                <ControllersContainer>
                    <BottonControll>
                        <Ionicons name="heart" color="#FF2D55" size={24} />
                    </BottonControll>
                    <BottonControll>
                        <Feather name="shuffle" color="#7F7F7F" size={22} />
                    </BottonControll>
                    <BottonControll>
                        <MaterialIcons
                            name="repeat"
                            color="#FF2D55"
                            size={24}
                        />
                    </BottonControll>
                    <BottonControll>
                        <MaterialCommunityIcons
                            name="playlist-music"
                            color="#7F7F7F"
                            size={24}
                        />
                    </BottonControll>
                </ControllersContainer>

                <ControllersContainer
                    style={{
                        width: '60%',
                    }}>
                    <BottonControll>
                        <Ionicons
                            name="ios-volume-low"
                            color="#7F7F7F"
                            size={18}
                        />
                    </BottonControll>
                    <Slider
                        style={{
                            width: '80%',
                            height: 40,
                            justifyContent: 'center',
                            /* alignItems: 'center', */
                        }}
                        value={0}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FF2D55"
                        maximumTrackTintColor="#FFBFCB"
                        thumbTintColor="#FF2D55"
                        thumbStyle={{
                            width: 18,
                            height: 18,
                            borderRadius: 9,
                        }}
                        trackStyle={{height: 4, borderRadius: 2}}
                        /* onValueChange={(val) => TrackPlayer.seekTo(val)} */
                    />
                    <BottonControll>
                        <Ionicons
                            name="ios-volume-high"
                            color="#7F7F7F"
                            size={18}
                        />
                    </BottonControll>
                </ControllersContainer>
            </Container>
            <Modalize
                modalStyle={{backgroundColor: '#CCCCCC'}}
                rootStyle={{elevation: 21}}
                snapPoint={400}
                ref={modalizeRef}
                HeaderComponent={
                    <>
                        <ControllersContainer
                            style={{
                                width: '100%',
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                            }}>
                            <ImageModal>
                                <Image
                                    source={require('../assets/img/khalid.png')}
                                    style={{width: '100%', height: '100%'}}
                                />
                            </ImageModal>

                            <TextControll>
                                <TextoModalHeader>
                                    Saturday Nights
                                </TextoModalHeader>
                                <TextoModalHeader
                                    style={{
                                        fontSize: 9,
                                        color: '#35384090',
                                        marginTop: -4,
                                    }}>
                                    Khalid
                                </TextoModalHeader>
                            </TextControll>

                            <ButtomClose onPress={onClose}>
                                <Ionicons
                                    name="ios-close-circle"
                                    color="#35384090"
                                    size={28}
                                />
                            </ButtomClose>
                        </ControllersContainer>
                        <Linha />
                    </>
                }>
                <ModalBody>
                    <ModalBodyBody />
                </ModalBody>
            </Modalize>
        </>
    );
};
