import css from 'styled-jsx/css'
export default css`
    body{
        font-family: 'Alef', Rubik, Cabin, sans-serif;
        font-size: 18px;
        color: #4D4D4D;
        background: none !important
        /*background-color: #932581;
        background-image: url(../static/purple_clouds.jpg);
        background-size: cover;*/
    }
    .form-container{
        width: 100%;
        padding: 5%;
        box-sizing: border-box;
        background-color: white;
        border-radius: 0.75em;
    }
    @media only screen and (max-width: 480px){
        .form-container{
            width: 100%;
            margin: 0 auto;
            border-radius: 0;
        }   
    }
    @media only screen and (max-device-width: 480px){
        .form-container{
            width: 100%;
            margin: 0 auto;
            border-radius: 0;
        }   
    }
    .logo{
        width: 12em;
        margin: 3% auto;
        display: block;
    }
    .registration-form-title{
        font-weight: bold;
        font-size: 2em;
        margin: 0;
        line-height: 1em;
        text-align: center;
        color: #932581;
        margin-bottom: 5%;
    }
    .section-instruction{
        color: white;
        background-color: rgb(45, 140, 145);
        font-weight: bold;
    }
    .registration-form, .payment-form {
        margin: 2.5% auto;
    }
    .register-button-wrap div{
        margin: 0 auto;
        text-align: center;
    }
    .register-button{
        display: block;
        margin: 5% auto;
        margin-bottom: 0;
        border: none;
        outline: none;
        background-color: #932581;
        color: white;
        font-weight: bold;
        font-family: 'Alef', sans-serif;
        font-size: 24px;
        cursor: pointer;
        border-radius: 0.3em;
        padding: 0.5em 1em;
        transition: box-shadow 0.3s;
    }
    .register-button:focus{
        box-shadow: 0px 3.5px 12px 1px rgba(0,0,0,0.4);
    }
    .register-button:hover{
        background-color: #831561;
    }
    .register-button:active{
        background-color: #630551;
    }
    button:disabled.register-button,
    button[disabled].register-button{
        background-color: #ccc;
        cursor: not-allowed;
    }
    .failed-donation-message{
        padding: 5%;
    }
    .close-failed-donation-button{
        display: block;
        margin: 5% auto;
        border: none;
        outline: none;
        background-color: #ddd;
        color: #932581;
        font-weight: bold;
        font-family: 'Alef', sans-serif;
        font-size: 24px;
        cursor: pointer;
        border-radius: 0.3em;
        padding: 0.5em 1em;
        transition: box-shadow 0.3s, background-color 0.3s;
    }
    .close-failed-donation-button:hover{
        box-shadow: 3px 3px 7px 1px rgba(0,50,70,0.4) inset;
        background-color: #eee;
    }
`