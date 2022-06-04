function AutoPlay(enable){
    this.enable = enable;
}

AutoPlay.prototype.run = function(player){
    if(this.enable){
        player.mute();
        player.play();
        player.unmute();
    }
}

export default AutoPlay;