    import ChatBot from 'react-simple-chatbot';
    import { ThemeProvider } from 'styled-components';
    import PropTypes from 'prop-types';
    import logo from '../../assets/HomePage/chatlogo.png'
import { useBotInteractionMutation } from '../../redux/features/api/apiSlice';

    const Review = ({ steps }) => {
        const { name, phone, email, course, studylocation } = steps;
        
        return (
            <div style={{ width: '1000px'}}>
                <h3>Summary</h3>
                <table>
                    <tbody style={{ wordWrap: 'break-word' }}>
                        <tr>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>{phone.value}</td>
                        </tr>
                        <tr style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            <td style={{fontSize:'10px'}}>{email.value}</td>
                        </tr>
                        <tr>
                            <td>{course.value}</td>
                        </tr>
                        <tr>
                            <td>{studylocation.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    Review.propTypes = {
        steps: PropTypes.object,
    };
    const theme = {
        background: '#dadaf1',
        headerBgColor: '#2a2a6f',
        headerFontSize: '20px',
        botBubbleColor: '#4141A5',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FB8F2A',
        userFontColor: 'white',
        fontFamily: 'Montserrat, sans-serif',
        userBubbleStyle: {
            maxWidth: '100%',
        },
        botBubbleStyle: {
            maxWidth: '100%',
        },
    };

    // Set some properties of the bot
    const config = {
        botAvatar: logo,
        floating: true,
    };

    function ChatbotBubble() {
        const [botResponse,{isLoading}] = useBotInteractionMutation()

       function handleEnd({values }) {
           if(!isLoading){
            botResponse(values)
           }
          }

        return (
            <>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        // This appears as the header
                        // text for the chat bot
                        headerTitle="Continental"
                        handleEnd={handleEnd}
                        steps={[
                            {
                                id: '1',
                                message: 'What is your name?',
                                trigger: 'name',
                            },
                            {
                                id: 'name',
                                user: true,
                                trigger: '2',
                            },
                            {
                                id: '2',
                                message: 'Hi, {previousValue}. What is your phone number?',
                                trigger: 'phone',
                            },
                            {
                                id: 'phone',
                                user: true,
                                trigger: '3',
                            },
                            {
                                id: '3',
                                message: 'Great! What is your email address?',
                                trigger: 'email',
                            },
                            {
                                id: 'email',
                                user: true,
                                trigger: '4',
                            },
                            {
                                id: '4',
                                message: 'What course are you looking for?',
                                trigger: 'course',
                            },
                            {
                                id: 'course',
                                user: true,
                                trigger: '5',
                            },
                            {
                                id: '5',
                                message: 'Where are you planning to study?',
                                trigger: 'studylocation',
                            },
                            {
                                id: 'studylocation',
                                user: true,
                                trigger: 'review',
                            },
                            {
                                id: 'review',
                                component: <Review />,
                                asMessage: true,
                                trigger: 'update',
                            },
                            {
                                id: 'update',
                                message: 'Would you like to update some field?',
                                trigger: 'update-question',
                            },
                            {
                                id: 'update-question',
                                options: [
                                    { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                                    { value: 'no', label: 'No', trigger: 'end-message' },
                                ],
                            },
                            {
                                id: 'update-yes',
                                message: 'What field would you like to update?',
                                trigger: 'update-fields',
                            },
                            {
                                id: 'update-fields',
                                options: [
                                    { value: 'name', label: 'Name', trigger: 'update-name' },
                                    { value: 'phone', label: 'Phone Number', trigger: 'update-phone' },
                                    { value: 'email', label: 'Email', trigger: 'update-email' },
                                    { value: 'course', label: 'Course', trigger: 'update-course' },
                                    { value: 'study-location', label: 'Study Location', trigger: 'update-study-location' },
                                ],
                            },
                            {
                                id: 'update-name',
                                update: 'name',
                                trigger: 'review',
                            },
                            {
                                id: 'update-phone',
                                update: 'phone',
                                trigger: 'review',
                            },
                            {
                                id: 'update-email',
                                update: 'email',
                                trigger: 'review',
                            },
                            {
                                id: 'update-course',
                                update: 'course',
                                trigger: 'review',
                            },
                            {
                                id: 'update-study-location',
                                update: 'studylocation',
                                trigger: 'review',
                            },
                            {
                                id: 'end-message',
                                message: 'Thanks! Our executive will get back to you shortly',
                                end: true,
                            },
                        ]}

                        {...config}

                    />
                </ThemeProvider>
            </>
        );
    }

    export default ChatbotBubble;
