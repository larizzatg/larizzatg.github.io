const SKILL_JS_SELECTOR = 'skill-js';
const WORK_JS_SELECTOR = 'work-js';
const WORK_LIST_JS_SELECTOR = 'work__list';
const SKILL_CSS_ACTIVE = 'skills_skill--active';
const WORK_CSS_SHOW = 'work--show';


document.addEventListener('DOMContentLoaded', initialize());

function initialize() {    
    const skills = document.getElementsByClassName(SKILL_JS_SELECTOR); 
    for(let i = 0; i < skills.length; i += 1) {
        skills[i].addEventListener('click', function() {
            toogleSkill(skills[i], skills);
            showSkillDetail(skills[i].getAttribute('data-skill'));
        });
    }
}

function toogleSkill(selectedSkill, skills) {
    for(let i = 0; i < skills.length; i += 1) {
        if (skills[i] != selectedSkill) {
            skills[i].classList.remove(SKILL_CSS_ACTIVE);
        }
    }
    selectedSkill.classList.add(SKILL_CSS_ACTIVE);
    
}

function showSkillDetail(skillName) {    
    
    const works = [
        {
            company: 'ARS Yunen',
            description: 'Create the front-end, design system and component library for the main web apps of the company',
            skills: ['html5', 'css3', 'sass', 'javascript', 'vuejs', 'webpack', 'rollup'],
        },
        {
            company: 'ARS Yunen',
            description: 'Create an app for the generation of dynamic surveys to the public.',
            skills: ['html5', 'css3', 'javascript', 'vuejs', 'csharp', 'asp.net', 'sqlserver'],
        },
        {
            company: 'ARS Yunen',
            description: 'Create an API to generate dynamic reports that reduce the time of report generation from 1m to 3s',
            skills: ['csharp', 'asp.net', 'topshelf'],
        },
        {
            company: 'United Nearshore Operations',
            description: 'Centralize the authentication/authorization of users between different servers/intranet versions.',
            skills: ['php', 'postgresql'],
        },
        {
            company: 'United Nearshore Operations',
            description: 'Create an app to track follow-up plans for the deficient KPI\'s of the employees',
            skills: ['php', 'postgresql', 'javascript', 'angularjs'],
        },
        {
            company: 'United Nearshore Operations',
            description: 'Build an app to manage the bus transportation that boost the requests a 80%.',
            skills: ['php', 'postgresql', 'javascript',  'angularjs'],
        },
        {
            company: 'Viajes Dominicana Tours',
            description: 'Redesign the database architecture for the mail campaign system that reduce the time to process 30M emails per month a 90%.',
            skills: ['sqlserver', 'pl-sl', 'crons'],
        },
        {
            company: 'Viajes Dominicana Tours',
            description: 'Integrate Google API Reviews which increase the reservations of a 20%',
            skills: ['javascript', 'csharp', 'asp-classic'],
        },
        {
            company: 'Viajes Dominicana Tours',
            description: 'Collaborate with the design team to convert PSD high fidelity mock ups to code',
            skills: ['html5', 'css3'],
        },
    ];
    
    const work = document.querySelector('.' + WORK_JS_SELECTOR);
    const workList = document.querySelector('.' + WORK_LIST_JS_SELECTOR);
    const workListItems = works.reduce((acc, work) => {
        if (work.skills.includes(skillName)) {
            const listItem = document.createElement('li');
            listItem.classList.add('work__list__item');
            listItem.innerHTML = `
                <span class="work__list__item__description">
                <span class="work__list__item__company">
                    ${work.company} 
                </span>
                    ${work.description}
                </span>
            `;
            acc.push(listItem);
        }
        return acc;
    }, []);
    while(workList.firstChild ){
        workList.removeChild(workList.firstChild);
    }
    workList.append(...workListItems);
    work.classList.add(WORK_CSS_SHOW);
    
    
}