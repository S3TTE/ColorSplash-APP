import { View, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import mobileAds, { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const InlineAd = () => {
  const [isAdLoaded, setIsAdLoaded] = useState<boolean>(false);
  const [isSDKInitialized, setIsSDKInitialized] = useState<boolean>(false);

  // Test banner IDs
  const bannerUnitId = __DEV__ 
    ? TestIds.BANNER
    : Platform.select({
        ios: 'ca-app-pub-REAL_ID_HERE',
        android: 'ca-app-pub-REAL_ID_HERE',
        default: TestIds.BANNER,
      });

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        await mobileAds()
          .initialize()
          .then(adapterStatuses => {
            setIsSDKInitialized(true);
            console.log('Mobile Ads SDK initialized successfully');
          });
      } catch (error) {
        console.error('Error initializing Mobile Ads SDK:', error);
      }
    };

    initializeSDK();
  }, []);

  if (!isSDKInitialized) {
    return null;
  }

  return (
    <View style={{ 
      height: isAdLoaded ? 'auto' : 0,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <BannerAd
        unitId={bannerUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Ad loaded successfully');
          setIsAdLoaded(true);
        }}
        onAdFailedToLoad={(error) => {
          console.error('Ad failed to load:', error);
        }}
      />
    </View>
  );
};

export default InlineAd;