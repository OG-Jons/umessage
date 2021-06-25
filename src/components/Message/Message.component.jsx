import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
        height: '89ex',
        overflow: 'scroll',
        zIndex: -1

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
        justifyContent: 'flex-start'
    },

    send: {
        justifyContent: 'flex-end'
    }
})

export default function Message({messages}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {messages.map(message => (
                <div className={`${classes.parent} ${message.id === 1 ? classes.send : classes.received}` } key={message.id}>
                    <Card className={` ${classes.message}`} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {message.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {message.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>

    )
}