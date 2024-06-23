import React from "react";
import TicTacToe from "../components/TicTacToe/TicTacToe";
//import circle from '../components/Assets/circle.png'
//import cross from '../components/Assets/cross.png'
//import AllGame from "../components/TicTacToe/AllGame";

const Dashboard = () =>{
    return (
        <div className="title">
            <div className="tic-container">
                {/* <h1>"Tic Tac Toe"</h1> */}
                <TicTacToe/>
                {/* <AllGame/> */}
            </div>
        </div>
    );
};

export default Dashboard;