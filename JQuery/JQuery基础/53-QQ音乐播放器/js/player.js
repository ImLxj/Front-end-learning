(function(window){
    function Player(){
        return new Player.prototype.init($audio);
    }
    Player.prototype = {
        constructor : Player,
        init : function($audio){
            this.$audio = $audio;
            this.audio = $audio.get(0);
        }
    }
    Player.prototype.init.prototype = Player.prototype;
    window.Player = Player;
})(window);