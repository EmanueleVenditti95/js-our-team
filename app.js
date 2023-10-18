console.log('Our Team')

// - creare un array con tutti i membri
const usersList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];


// - stampare le informazioni dei membri nel dom

for (let i = 0; i < usersList.length; i++) {
    const currentUser = usersList[i]
    const userName = currentUser.name
    const userRole = currentUser.role
    const userPhoto = currentUser.photo
    console.log(userName, userRole, userPhoto)

    let userInfo = document.createElement("div")
    userInfo.classList.add('card')
    userInfo.innerHTML = `
                <span><img src="./img/${userPhoto}"></span>
                <span class="card__title">${userName}</span>
                <span class="card__par">${userRole}</span>
                `
    document.querySelector('.container').append(userInfo);
};
