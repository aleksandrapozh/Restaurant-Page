export function loadHome (){
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent =  'Delicious Restaurant';

    const description = document.createElement('p')
    description.textContent = 'The best Restaurant  in the town! We offer high-quality food prepared by world-class chefs.'

    const hours = document.createElement('p')
    hours,textContent = "Open daily from 10:00 AM to 11:00 PM.";

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(hours);
}