console.log('Our Team')

// - creare gli oggetti corrispondenti ai membri del team
const member1 = {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
};

const member2 = {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
};

const member3 = {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
};

const member4 = {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
};

const member5 = {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
};

const member6 = {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
};

console.log(member1, member2, member3, member4, member5, member6);

// - creare un array con tutti i membri
const teamMembers = [member1, member2, member3, member4, member5, member6];
console.log(teamMembers);

// - stampare le informazioni dei membri nel dom
document.getElementById('member1name').innerHTML = member1.name;
document.getElementById('member1role').innerHTML = member1.role;
document.getElementById('member1pic').innerHTML = member1.photo;

document.getElementById('member2name').innerHTML = member2.name;
document.getElementById('member2role').innerHTML = member2.role;
document.getElementById('member2pic').innerHTML = member2.photo;

document.getElementById('member3name').innerHTML = member3.name;
document.getElementById('member3role').innerHTML = member3.role;
document.getElementById('member3pic').innerHTML = member3.photo;

document.getElementById('member4name').innerHTML = member4.name;
document.getElementById('member4role').innerHTML = member4.role;
document.getElementById('member4pic').innerHTML = member4.photo;

document.getElementById('member5name').innerHTML = member5.name;
document.getElementById('member5role').innerHTML = member5.role;
document.getElementById('member5pic').innerHTML = member5.photo;

document.getElementById('member6name').innerHTML = member6.name;
document.getElementById('member6role').innerHTML = member6.role;
document.getElementById('member6pic').innerHTML = member6.photo;