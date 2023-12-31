import soundfile from "../audio/crocodile shoes.wav"


const MainUI = ({numberOfLoops, setNumberOfLoops}) => {
    

    function play() {
        const audio = document.getElementById("audio")
        audio.play();

        var loops = numberOfLoops;
        var count = 0;

        audio.onended = function() {
            if(count <= loops){
                count++;
                audio.play()
            }
        }
      
    }
    //audio plays number of times specified

  

    return ( 
        <section className="main-interface">

            <div className="audio-button">
        <audio id="audio" src={soundfile}>NAIL ME</audio>
        <input type="button" id="nail-it-button" value="NAIL ME" onClick={play} />
            </div>

            <div className="number-of-loops-input">
        <input
            type="number"
            id="loop-number-input"
            placeholder="Type a whole number..."
            value={numberOfLoops}
            onChange={(event) => setNumberOfLoops(event.target.value)}
        />
            </div>

        </section>
     );
}

 
export default MainUI;