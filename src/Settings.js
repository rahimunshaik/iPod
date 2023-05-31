import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        {/* <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img> */}
                </div>
                {/* <div style={{display:'flex' , flexDirection : 'column' , justifyContent: 'center'}}>
                    <p><b><center>Settings</center></b></p>
                    <img width="100" height="100" src="https://img.icons8.com/cotton/64/settings--v1.png" alt="settings--v1"/>
                    
                </div> */}
                <div style={{width : '100%' , height : '90%'}}>
                    
                    <iframe src="https://giphy.com/embed/KvHkSN8YNG5kzvdU2N" width="300" height="250" frameBorder="0" class="giphy-embed" ></iframe>
                   
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Settings;