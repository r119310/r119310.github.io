function workAllOn() {
    $('.worksAllButton').enableClass('.selectedWorksButton');
    $('.worksCodeButton').disableClass('.selectedWorksButton');
    $('.worksAllButton').disableClass('.selectedWorksButton');
}

function workCodeOn() {
    $('.worksAllButton').disableClass('.selectedWorksButton');
    $('.worksCodeButton').enableClass('.selectedWorksButton');
    $('.worksAllButton').disableClass('.selectedWorksButton');

}

function workArtOn() {
    $('.worksAllButton').disableClass('.selectedWorksButton');
    $('.worksCodeButton').disableClass('.selectedWorksButton');
    $('.worksAllButton').enableClass('.selectedWorksButton');

}