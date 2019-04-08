import React from 'react'
import fotoPerfil from '../pics/perfil.png'

class PersonalInfo extends React.Component{

    handleFB(e){
        window.open('fb://profile/10201391213459338','_blank');
    }

    handleTT(e){
        window.open('twitter://user?screen_name=Ricardo_2R1','_blank');
    }

    handleG(e){

    }

    handleWA(e){
        window.open('https://api.whatsapp.com/send?phone=5215551643219','_blank');
    }
    //https://web.facebook.com/photo.php?fbid=10201391213459338&set=picfp.1744355384&type=3&eid=ARDFxoCsgthA7XmGDgKf77jktOH0AYFYgl3kF-iHGyVDR9Kx7JdKknsY8Mjv3xBVpZt1XyrOAY-jf1GW
    render(){
        return (
            <React.Fragment>
                <div className="row mt-2">
                    <div className="col-md-3 mx-2">
                    <img src={fotoPerfil} alt="Foto de perfil" className="img-fluid rounded-circle mx-auto d-block"></img>
                    </div>
                    <div className="col-md">
                    <div className="container">
                        <div className="text-center h3 font-weight-bold">Sobre mí</div>
                        <div className="font-weigth-light">
                        <p>asdsfdsagfdsgsdfgdsfgsdfg</p>
                        <div className="row">

<div className="col-md text-center" onClick={this.handleFB}><i className="fab fa-facebook-f text-blue"></i> Ricardo Torres</div>
<div className="col-md text-center" onClick={this.handleTT}><i className="fab fa-twitter"></i> @Ricardo_2R1</div>
<div className="col-md text-center"><i className="fab fa-google"></i> ricardots211@gmail.com</div>
<div className="col-md text-center" onClick={this.handleWA}><i className="fab fa-whatsapp"></i> +52 1 55 5164 3219</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PersonalInfo;