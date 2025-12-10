    // Card flip functionality
    const cardContainer = document.getElementById('card-container');
    const flipBtn = document.getElementById('flip-btn');
    const flipBackBtn = document.getElementById('flip-back-btn');

    flipBtn.addEventListener('click', () => {
        cardContainer.classList.add('flipped');
    });

    flipBackBtn.addEventListener('click', () => {
        cardContainer.classList.remove('flipped');
    });

    // Element SDK Configuration
    const defaultConfig = {
        background_color: '#fef3c7',
        card_color: '#ffffff',
        text_color: '#1f2937',
        accent_color: '#f59e0b',
        button_color: '#ef4444',
        font_family: 'Georgia',
        font_size: 16,
        card_title: 'Happy Teachers\' Day!',
        teacher_name: 'Dear Teacher',
        main_message: 'Thank you for your endless patience, dedication, and inspiration. You\'ve made a lasting impact on my life, and I\'m grateful for everything you\'ve taught me. Your guidance has shaped who I am today.',
        closing_message: 'With gratitude and respect,',
        student_name: 'Your Student'
    };

    function applyConfig(config) {
        const cfg = {...defaultConfig, ...config };

        // Apply background color
        const appWrapper = document.getElementById('app-wrapper');
        appWrapper.style.backgroundColor = cfg.background_color;

        // Apply card colors
        const cardFront = document.querySelector('.card-front');
        const cardBack = document.querySelector('.card-back');
        cardFront.style.backgroundColor = cfg.card_color;
        cardBack.style.backgroundColor = cfg.card_color;

        // Apply text color
        const textElements = document.querySelectorAll('#card-title, #teacher-name, #main-message, #closing-message, #student-name, .card-back h2, .card-back p, footer p');
        textElements.forEach(el => {
            el.style.color = cfg.text_color;
        });

        // Apply accent color to decorative elements
        const decorativeElements = document.querySelectorAll('.decorative-element svg, .float-animation svg');
        decorativeElements.forEach(el => {
            el.style.color = cfg.accent_color;
        });

        // Apply divider color
        const divider = document.querySelector('.card-front .w-24');
        if (divider) {
            divider.style.backgroundColor = cfg.accent_color;
        }

        // Apply button colors
        const buttons = document.querySelectorAll('#flip-btn, #flip-back-btn');
        buttons.forEach(btn => {
            btn.style.backgroundColor = cfg.button_color;
            btn.style.color = '#ffffff';
        });

        // Apply font
        const baseFontStack = 'Georgia, serif';
        const fontFamily = `${cfg.font_family}, ${baseFontStack}`;
        const baseSize = cfg.font_size;

        document.body.style.fontFamily = fontFamily;

        // Apply font sizes
        const cardTitle = document.getElementById('card-title');
        const teacherName = document.getElementById('teacher-name');
        const mainMessage = document.getElementById('main-message');
        const closingMessage = document.getElementById('closing-message');
        const studentName = document.getElementById('student-name');
        const backTitle = document.querySelector('.card-back h2');
        const backMessage = document.querySelector('.card-back p');
        const footerText = document.querySelector('footer p');

        if (cardTitle) cardTitle.style.fontSize = `${baseSize * 2.5}px`;
        if (teacherName) teacherName.style.fontSize = `${baseSize * 1.75}px`;
        if (mainMessage) mainMessage.style.fontSize = `${baseSize * 1.25}px`;
        if (closingMessage) closingMessage.style.fontSize = `${baseSize * 1.1}px`;
        if (studentName) studentName.style.fontSize = `${baseSize * 1.5}px`;
        if (backTitle) backTitle.style.fontSize = `${baseSize * 2.25}px`;
        if (backMessage) backMessage.style.fontSize = `${baseSize * 1.25}px`;
        if (footerText) footerText.style.fontSize = `${baseSize * 0.875}px`;

        buttons.forEach(btn => {
            btn.style.fontSize = `${baseSize * 1.125}px`;
        });

        // Apply text content
        cardTitle.textContent = cfg.card_title;
        teacherName.textContent = cfg.teacher_name;
        mainMessage.textContent = cfg.main_message;
        closingMessage.textContent = cfg.closing_message;
        studentName.textContent = cfg.student_name;
    }

    // Initialize Element SDK
    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange: async(config) => {
                applyConfig(config);
            },
            mapToCapabilities: (config) => ({
                recolorables: [{
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.card_color || defaultConfig.card_color,
                        set: (value) => {
                            config.card_color = value;
                            window.elementSdk.setConfig({ card_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => {
                            config.accent_color = value;
                            window.elementSdk.setConfig({ accent_color: value });
                        }
                    },
                    {
                        get: () => config.button_color || defaultConfig.button_color,
                        set: (value) => {
                            config.button_color = value;
                            window.elementSdk.setConfig({ button_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            }),
            mapToEditPanelValues: (config) => {
                const cfg = {...defaultConfig, ...config };
                return new Map([
                    ['card_title', cfg.card_title],
                    ['teacher_name', cfg.teacher_name],
                    ['main_message', cfg.main_message],
                    ['closing_message', cfg.closing_message],
                    ['student_name', cfg.student_name]
                ]);
            }
        });

        applyConfig(window.elementSdk.config);
    } else {
        applyConfig(defaultConfig);
    }