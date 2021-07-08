import {makeStyles} from '@material-ui/core/styles'
import {Avatar, Box, Typography, CardContent, Card} from '@material-ui/core'
import "./Message.style.css"
import {auth} from "../../server/firebaseConfig";


const useStyles = makeStyles({
        message: {
            display: 'flex',
            width: 'max-content',
            maxWidth: '40vw',
            marginBottom: 5,
            flexDirection: 'column',

        },
        root: {
            width: '100%',
            height: '91ex',
            overflow: 'scroll',
            zIndex: -1,
            paddingBottom: 1
        },
        parent: {
            width: '100%',
            display: 'flex',
        },

        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },

        received: {
            justifyContent: 'flex-start',
            borderBottomLeftRadius: 0
        },

        send: {
            justifyContent: 'flex-end'
        },
        avatar: {
            marginTop: '5px',
            marginRight: '5px'
        }
    }
)

export default function Message({messages}) {
    const classes = useStyles()

    if (messages) {
        return (
            <Box className={`${classes.root} chatBox`}>
                {messages.map(message => (
                    <div
                        className={`${classes.parent} ${message.uid === auth.currentUser.uid ? classes.send : classes.received}`}
                        key={message.id}>
                        <Avatar className={classes.avatar} src={message.photoURL}/>
                        <Card className={classes.message} variant="outlined" height={'75%'}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {message.displayName}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {message.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Box>
        )
    } else return <></>
}