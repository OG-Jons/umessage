import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        //minWidth: 'min-content',
        width: 'max-content',
        maxWidth: '40vw',
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Message() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Name
                </Typography>
                <Typography variant="body2" component="p">
                    Messages ssssssssssssssssssssss kkkkkkk
                </Typography>
            </CardContent>
        </Card>
    );
}