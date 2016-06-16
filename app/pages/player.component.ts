import module from './module';

class Track {
    constructor(public title: string, public url: string) {
    }

    static fromTitle(title: string): Track {
        return new Track(title, `http://komu.kapsi.fi/k-minor/${title}.mp3`);
    }
}

class PlayerController {

    static $inject = ['$element', '$scope'];

    tracks: Track[] = [];
    currentTrack: Track = null;
    private audio: HTMLAudioElement;

    constructor($element: ng.IAugmentedJQuery, $scope: ng.IScope) {
        this.audio = $element.find('audio')[0] as HTMLAudioElement;
        this.audio.addEventListener('ended', () => $scope.$apply(() => this.trackEnded()));
    }

    $onChanges(c: { playlist: { currentValue: string[] } }) {
        if (c.playlist && c.playlist.currentValue) {
            this.tracks = c.playlist.currentValue.map(Track.fromTitle);
        }
    }

    trackEnded() {
        const tracks = this.tracks;
        const index = (tracks.indexOf(this.currentTrack) + 1) % tracks.length;

        this.playTrack(tracks[index]);
    }

    playTrack(track: Track) {
        this.currentTrack = track;

        this.audio.src = track.url;
        this.audio.load();
        this.audio.play();
    }

    title(): string {
        if (this.currentTrack) {
            return `k-minor - ${this.currentTrack.title}`;
        } else {
            return "k-minor";
        }
    };
}

module.component('player', {
    controller: PlayerController,
    controllerAs: 'player',
    template: require('./player.html'),
    bindings: {
        playlist: '<'
    }
});
