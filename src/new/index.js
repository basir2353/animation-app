var  cloudElement=document.getElementById('cloud-countainer')
var animatiaeElement=cloudElement.animate(
    [{transform: 'translate(1200px,0)'},{transform: 'translate(-1400px,0)'}],
    {
        duration:3000,
        iterations:Infinity,
        // playbackRate:-4

    }

)
var planeElement=document.getElementById('plane-container')
var animatiaeElement=planeElement.animate(
    [{transform: 'translate(0,-400px)'},
    {transform: 'translate(600px,-200px)'},
    {transform: 'translate(800px,0)'},
    {transform: 'translate(1000px ,200px)'},
    {transform: 'translate(1200px,300px)'},
    {transform: 'translate(100%,300px)'},
    ],
    {
        duration:3000,
        iterations:Infinity,
      
        
    }
)