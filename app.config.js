export default {
    expo: {
        name: 'BranchIssue',
        slug: 'BranchIssue',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.branch.BranchIssue',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#FFFFFF',
            },
        },
        web: {
            favicon: './assets/favicon.png',
        },
        plugins: [
            [
                '@config-plugins/react-native-branch',
                {
                    apiKey: 'key_live_f9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8',
                },
            ],
        ],
    },
}
