import * as three from 'three'

// const playground = document.createElement("canvas")
// playground.className = 'playground'
// document.body.appendChild(playground)

function createCamera () {
  const fov = 75
  const aspect = 2
  const near = 0.1
  const far = 5
  const camera = new three.PerspectiveCamera(fov, aspect, near, far)

  return camera
}

function createSquare() {
  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  const square = new three.BoxGeometry(boxWidth, boxHeight, boxDepth)

  const material = new three.MeshBasicMaterial({color: 0x44aa88})

  const cube = new three.Mesh(square, material)

  return cube
}

function main () {
  const renderer = new three.WebGLRenderer()

  console.log(renderer)

  const camera = createCamera()
  camera.position.z = 2

  const scene = new three.Scene()

  const cube = createSquare()
  scene.add(cube)

  function render(time) {
    time *= 0.001
  
    cube.rotation.x = time
    cube.rotation.y = time
  
    renderer.render(scene, camera)
  
    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)

  document.body.appendChild( renderer.domElement )
}

main()
