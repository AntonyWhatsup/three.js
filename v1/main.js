import * as THREE from 'three'; // Імпортуємо бібліотеку Three.js

// === Створюємо сцену ===
const scene = new THREE.Scene(); // Створюємо об'єкт сцени

// === Створюємо камеру ===
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Параметри:
// 75 - кут огляду (FOV)
// window.innerWidth / window.innerHeight - співвідношення сторін
// 0.1, 1000 - межі видимості (ближня і дальня площина відсічення)

camera.position.z = 5; // Відсуваємо камеру назад, щоб бачити об'єкти

// === Створюємо рендерер ===
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Включаємо прозорий фон
renderer.setSize(window.innerWidth, window.innerHeight); // Встановлюємо розмір рендерера
document.body.appendChild(renderer.domElement); // Додаємо рендерер до DOM-дерева (в HTML)

// === Перша фігура: Куб ===
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // Створюємо геометрію куба (1х1х1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#85B093' }); // Матеріал червоного кольору
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Створюємо Mesh для куба
cube.position.x = -4.5; // Зміщуємо куб вліво, щоб не накладався на піраміду
cube.rotation.set(0, 0, 0.9);

// === Друга фігура: Піраміда ===
const pyramidGeometry = new THREE.CylinderGeometry(0, 1, 1, 4); // Параметри:верхній радіус (піраміда), нижній радіус (основа піраміди), висота, кількість граней (чотирикутна основа)
const pyramidMaterial = new THREE.MeshBasicMaterial({ color: '#173C4C' }); // Матеріал синього кольору
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial); // Створюємо Mesh для піраміди
pyramid.position.x = 4.5; // Зміщуємо піраміду вправо

// === Третя фігура: Багатогранник ===
const octagonGeometry = new THREE.CylinderGeometry(1, 1, 1, 8);
const octagonMaterial = new THREE.MeshBasicMaterial({ color: '#326D6C' }); //
const octagon = new THREE.Mesh(octagonGeometry, octagonMaterial);
octagon.position.x = 1.5; 
octagon.rotation.set(5, 0, 0);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: '#568F7C' });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -1.5;





// === Додаємо об'єкти на сцену ===
scene.add(cube);
scene.add(pyramid);
scene.add(octagon);
scene.add(sphere);





// === Обробник подій для адаптації під розмір вікна ===
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // Оновлюємо розмір рендерера
    camera.aspect = window.innerWidth / window.innerHeight; // Оновлюємо співвідношення сторін камери
    camera.updateProjectionMatrix(); // Оновлюємо проекцію камери
});

// === Функція анімації ===
function animate() {
    requestAnimationFrame(animate); // Запускаємо наступний кадр анімації

    // Обертання фігур навколо осей X Y та Z

    //cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    
    //pyramid.rotation.x += 0.01;
    pyramid.rotation.y += 0.01;
    //pyramid.rotation.z += 0.01;

    //octagon.rotation.x += 0.01;
    octagon.rotation.y += 0.01;
    //octagon.rotation.z += 0.01;

    //sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    //sphere.rotation.z += 0.01;


    renderer.render(scene, camera); // Рендеримо сцену
}

// === Запуск анімації ===
animate();
