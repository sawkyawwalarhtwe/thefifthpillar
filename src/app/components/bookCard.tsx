import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BooksCard(props: any){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className='mt-4'>
          <CardMedia
            sx={{ height: 200 }}
            image={props.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions className='flex justify-between'>
            <Button size="small" onClick={handleClickOpen}>Preview</Button>
            <Button size="small" target="_blank" href={props.link}>Download</Button>
          </CardActions>
        </Card>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title" className='font-bold mt-4'>
          {props.title}
        </DialogTitle>
        <CardMedia
            sx={{ height: 200 }}
            image={props.img}
            title="green iguana"
            className='mx-2'
          />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        )
}