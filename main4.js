'use strict'
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var count = 0
document.getElementById("secs").innerHTML = `${count}`

var c;
var availableOfColors = ["yellow", "green", "red", "blue"]
var x = 0
var y = 0
var z = 50
var direction = "right"
var flow = "clockwise"

//function for delay
async function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

async function goRight()
{
        for(var i=1; i<=110; i++)
        {
            console.log(x,y)
            c = Shape.Rectangle(0,0,700,500);
            c.fillColor = "white"
            x += 5
            c = Shape.Rectangle(x,y,z,z);
            c.fillColor = "red"
            paper.view.draw();
            await delay(15)
        }

}

async function goDown()
{
    for(var i=1; i<=70; i++)
    {
        console.log(x,y)
        c = Shape.Rectangle(0,0,1500,1500);
        c.fillColor = "white"
        y += 5
        c = Shape.Rectangle(x,y,z,z);
        c.fillColor = "red"
        paper.view.draw();
        await delay(15)
    }
}

async function goLeft()
{
    for(var i=1; i<=110; i++)
    {
        console.log(x,y)
        c = Shape.Rectangle(0,0,1500,1500);
        c.fillColor = "white"
        x -= 5
        c = Shape.Rectangle(x,y,z,z);
        c.fillColor = "red"
        paper.view.draw();
        await delay(15)
    }
}

async function goUp()
{
    for(var i=1; i<=70; i++)
    {
        console.log(x,y)
        c = Shape.Rectangle(0,0,1500,1500);
        c.fillColor = "white"
        y -= 5
        c = Shape.Rectangle(x,y,z,z);
        c.fillColor = "red"
        paper.view.draw();
        await delay(15)
    }
}


async function drawShape()
{
    await delay(1000);
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "red"
    paper.view.draw();

    for(var i=1; i>0; i++)
    {
        await delay(15)
        if(direction == "right" && flow == "clockwise")
        {
            x = 0
            y = 0
            await goRight()
            direction = "down"
        }
        else if(direction == "down" && flow == "clockwise")
        {
            x = 550
            y = 0
            await goDown()
            direction = "left"
        }
        else if(direction == "left" && flow == "clockwise")
        {
            x = 550
            y = 350
            await goLeft()
            direction = "up"
        }
        else if(direction == "up" && flow == "clockwise")
        {
            x = 0
            y = 350
            await goUp()
            direction = "down"
            flow = "antiClockwise"
        }
        else if(direction == "down" && flow == "antiClockwise")
        {
            x = 0
            y = 0
            await goDown()
            direction = "right"
        }
        else if(direction == "right" && flow == "antiClockwise")
        {
            x = 0
            y = 350
            await goRight()
            direction = "up"
        }
        else if(direction == "up" && flow == "antiClockwise")
        {
            x = 550
            y = 350
            await goUp()
            direction = "left"
        }
        else if(direction == "left" && flow == "antiClockwise")
        {
            x = 550
            y = 0
            await goLeft()
            direction = "right"
            flow = "clockwise"
        }

    }
}
drawShape()

