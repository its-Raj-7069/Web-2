// 3D Scene: Floating Building (placeholder cube)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg-scene'),
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Floating Cube Placeholder
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshStandardMaterial({ color: 0x4f46e5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

// Animate
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.005;
  cube.rotation.x += 0.003;
  renderer.render(scene, camera);
}
animate();

// Responsive Canvas
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Entry Animations
gsap.from(".hero-content", { opacity: 0, y: -50, duration: 1 });
gsap.from(".card", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
gsap.from(".virtual-board", { opacity: 0, x: -100, duration: 1 });
gsap.from(".calendar", { opacity: 0, x: 100, duration: 1 });
