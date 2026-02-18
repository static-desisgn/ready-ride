tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },

            maxWidth: {
                '2lg': '1327px', // custom max-width
            },
            colors: {
                black: '#24262d',
                white: '#ffffff',

                gray: {
                    50: '#f6f7f9',
                    100: '#edeef1',
                    200: '#d7dae0',
                    300: '#b3bac6',
                    400: '#8a94a6',
                    500: '#687387',
                    600: '#565f73',
                    700: '#464d5e',
                    800: '#3d434f',
                    900: '#363a44',
                },

                status: {
                    green: { 600: '#36b37e' },
                    yellow: { 600: '#ffab00' },
                    red: { 600: '#ff5630' },
                    blue: { 600: '#0065ff' },
                },

                primary1: {
                    50: '#f1f7fe',
                    100: '#e3eefb',
                    200: '#c0ddf7',
                    300: '#89c1f0',
                    400: '#4aa1e6',
                    500: '#2285d5',
                    600: '#1469b5',
                    700: '#125492',
                    800: '#134879',
                    900: '#153d65',
                    950: '#0e2743',
                },

                primary2: {
                    50: '#edfcf4',
                    100: '#d4f7e3',
                    200: '#adedcc',
                    300: '#77deae',
                    400: '#42c88e',
                    500: '#1cad73',
                    600: '#108b5d',
                    700: '#0d6f4c',
                    800: '#0d583e',
                    900: '#0b4935',
                    950: '#05291e',
                },

                driverPrimary: {
                    50: '#f6f4fe',
                    100: '#edebfc',
                    200: '#dfdbf9',
                    300: '#c7bdf5',
                    400: '#aa98ed',
                    500: '#8e6de5',
                    600: '#8154da',
                    700: '#6c3cc5',
                    800: '#5b32a5',
                    900: '#4c2b87',
                    950: '#2f1a5b',
                },
            },


            screens: {
                'xl-1': '1140px',   // iPhone SE, small Android
            },
        },
    },
}
