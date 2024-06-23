import React from 'react';
//import TicTacToe from '../TicTacToe/TicTacToe';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const AllGame = () => {
  return (
    <div className='AllGame-Container'>

        <Link style={{ textDecoration: 'none' }} to='/TicTacToe'>
            <Button style={{border:'none'}} variant="outlined">
                    Paly Now
            </Button>
        </Link>
    </div>
  )
}

export default AllGame;

