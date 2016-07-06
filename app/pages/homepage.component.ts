import module from './module';

class HomepageController {

    playlist = [
        'ark',
        'Blibs',
        'canada',
        'Chilled',
        'csb',
        'Cthulhu',
//        'Gaza',
        'Glitchy',
        'Jaa-a',
        'Jukola',
        'Lines',
//        'Minding',
//        'Nineteen',
        'One Note',
        'operator',
        'over',
        'Perfect Day',
//        'Rounds',
        'se-tudo',
        'sjh',
//        'Something Unknown',
//        'Song 1',
        'Such luck',
        'Zenny'
    ];
}

module.component('homepage', {
    template: require('./homepage.html'),
    controller: HomepageController,
    controllerAs: 'homepage'
});
