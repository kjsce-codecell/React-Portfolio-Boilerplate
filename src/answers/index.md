**Try to do it on your own before seeing the answers**

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
```

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

