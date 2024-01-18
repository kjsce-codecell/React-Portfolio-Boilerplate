**Try to do it on your own before seeing the answers**


## Home.jsx
```
<Card
    card={"card2 card_2"}
    cardName={"infoCard"}
    isReverse={true}
    title={"EXPERIENCES"}
    description={selectedExperience.description}
    descType={"info"}
    viewMore={true}
    viewMoreLink={"/experience"}
/>

<Card
    card={"card1"}
    cardName={"infoCard"}
    isReverse={true}
    title={"Projects"}
    description={selectedExperience.description}
    descType={"info"}
    viewMore={true}
    viewMoreLink={"/projects"}
/>
```

## Experience.jsx,Challenge 1
```
<!-- outside return -->
const data3=expData[2];
const data4=expData[3];


<!-- inside return -->
<Card
    key={index}
    card={"card2"}
    cardName={"expCard"}
    isReverse={true}
    title={data3.title}
    description={data3.description}
    imageUrl={data3.imageUrl}
    descType={"desc"}
/>

<Card
    key={index}
    card={"card2"}
    cardName={"expCard"}
    isReverse={true}
    title={data4.title}
    description={data4.description}
    imageUrl={data4.imageUrl}
    descType={"desc"}
/>
```

## Experience.jsx,Challenge 2
```
 {expData.map((data, index) => (
    index % 2 === 0 ? (
        <Card
            key={index}
            card={"card1"}
            cardName={"expCard"}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            descType={"desc"}
        />
    ) : (
        <Card
            key={index}
            card={"card2"}
            cardName={"expCard"}
            isReverse={true}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            descType={"desc"}
        />
    )
))}
```
Home.jsx Challenge 1: useState and useEffect
```
const [isPlaying, setIsPlaying] = useState(false);
className={`home-cassete ${ isPlaying && "down"}`}

 useEffect(() => {
        if (!isPlaying) {
            stop(); // stop the music
        } else {
            play(); // play the music
        }
        setCdPosition(isPlaying ? "down" : "up");
        return () => {
            stop();
        }
    }, [isPlaying]);
```