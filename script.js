function init() {

    // Scene && Camera 

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer

    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Resize

    window.addEventListener('resize', onWindowResize, false)

    // Mouse location

    this.mouse = new THREE.Vector3()
    window.addEventListener('mousemove', (event) => {
        this.mouse.x = event.clientX / window.innerWidth * 2 - 1
        this.mouse.y = - (event.clientY / window.innerHeight * 2 - 1)
        this.mouse.z = 3
        //console.log(this.mouse)
    })

    // PointLight

    const pointLight = new THREE.PointLight(0xb9d5ff, 1)
	pointLight.position.set( this.mouse.x, this.mouse.y, this.mouse.z )
	pointLight.castShadow = true
    pointLight.position.set(3,1.5,3)
    scene.add(pointLight)

    // Cube 

    const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cubeMaterial = new THREE.MeshStandardMaterial( { color: 0x0099ff } );
    cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube2 = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube2.position.y = 
    scene.add(cube);
}



function animate() {
	requestAnimationFrame(animate);
    cube.rotation.x += .003;
    cube.rotation.y += .003;
	renderer.render(scene, camera);
}

function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


init ();
animate();