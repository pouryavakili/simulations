import { Box } from "@mui/material"
import TweetItems from "./TweetItems"

const TweetList = () => {
    const list = [
        {
            avatar : "https://s3-alpha-sig.figma.com/img/a0a6/671c/3d922b97d7883edd90ba3f90da1e315a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLr1SwR-EqpX3Tu5BXKv-nM5AG2ML2LyPzglirfWlcPY7~dTnd2S837lrXfzpO81BqWkziXs6eMWz7BWD6tO-AJ9wR~CSH6CQg13JAmJvvKoGtUKGMtyErGwHe1UMNkZAyHx40M6E8Qe9zMYjuihP9L4ZlEa2SUnlXAzH2EhcHU8XDbTmJbINCkHxNIDyx-Z0m~~TNUKH3E48iOnam4egdUB3f7O3cNpAHIX97b8ShGtLYl9OmatRiLtcM-Av8HMHaiEHpPmIZ6gYLPyEznDhC8Q2N0RFFcxF9F1GM5Qsee4Uz7PnUb3hzizx~NvDvqHAe6Sx3dcp8OeAJtrr~wfFg__",
            text: "No coffee for me after lunch, or I’ll be up till sunrise"
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/dc17/48c7/c9a9cc1158ec1f34860b53ee583176b0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8mO6SndTvzOoz3rluupDz9F8SIZSTLHp9TNuBV4vWQvh5GnxFU91PkkgJBOQK7B3n26gZt~Gcswd74XSDuBuonZm4CXCJWmE3EAcgjENDRE1j3EnjU~shhjSJxkZh4BJOJ1jEl9AS26~mrJ0uECgtAqOhdTQsryKTeetvt8I7UbMAF2-WeVj913-rbmwvkUgTJ3NBFVJioGS8nIZE6ZWj5YV8g4IX8OgkfhaAtq1TRcI~L9ti~HuHmM3ubNs9PXOc0v6piFsKk~KNC0fTXp0WDhKkV~xNP05iV0RPfQu9FuvsD3tJomYLlZmNZERiAs0Ys6gLF3lzwBwb6r6IFnqQ__",
            text: "Late-night coffee = terrible idea, but I’ll risk it."
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/16a6/12ee/d2ba2a61114ee6dbdd48253fd9de078b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RvhPpjtBeR92OzSmqAY9H9Wwu-c7IZ3zSceBWbzijZG3QSWHEpIWL8HpKJwk4LIYhjJa~yEMGVR5x6yPLGrmVwgFgmD1CdgtcbV3YzALrFEhaWspZW~1iRjwST-4u42l3lAkrk-Xxm4J2XL99wKM2fwnaiimmkPh9TozU8c2XVmPtbCTElnEct2GDCqqvexIM4HsWrbHedvR7vsASeIMtmYY-uCTc272cRfGxa1tPRlGKYd9ZrZ1Iom0CZNkdRSwxC03kuCbp5bz70VvWgTGDxCbMpBoECC-Exzbrg14eeNuNAqPIo7jy8EYfohUfK3Fp0bP6ZtUYNOjNtuxHQbN~w__",
            text: "Drank coffee, now I’m wide awake and still unproductive"
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/c832/668e/a2483d22124deffdce1f99bb68cbad49?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zxr8RGbzyE86TdfDWkiykw1a6RnVHqdwEqF9RXMwISWBuwZg1CfI0sw5jxlX2VyNWcbDpoJoYgDuvlW8VxXgvJpVWRqz4bkqPSFYoMOZEFzE3esOOA~fTngq47cWOJ4WdarzF8g6YSNIxY6pkxvX-HTlJP8IgRAmNiY5-DkHrDUWfpNzlcNG-pXR1VaZKdXNcXDP~ivUOoLrp5IqjcmFmj038qBmuVU2zLSg9FWMv3KOy7JfuYYaI39kkkKMIyPhZ4uvnkGJXel48bVt7CSxJlg3dRMbf8tBHB34Nuunszu51TgL5FllR77ByeF6Z3kYDD6hIrGCvIyLtGaBQzrxwQ__",
            text: "Morning coffee is my only personality trait"
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RY8HglMs8RqCK3DonleVHI2-fbw72kncZ1ZbpxHrSGltAIr-tGYwF9H0GRX72s1ShFLPtxxajQxzCwy2iVcFENolyNONLQef1keN0WZfen8SR7yYGaJFIG4QTPfAnXvwX5PaV6G9X4uZQ5VITOozC-eelwcugkctAq3mJFW20rR5xx3r79KtP~01~KilO9Uu-uuLzZTDY6brYIKwh8tgGPHG9C18a1kN4pmyggCRmvvow7C~evKlr902ZJBUF452g5WipBXjbuLKS0kpvTL8JRGQSP9YrqLORYM6VraXoDSUdyeS-vXfuQGJPlKOsD6FxjcSeLaV8Jv5IbGjkqNHhA__",
            text: "Why does coffee smell better than it tastes?"
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/a0a6/671c/3d922b97d7883edd90ba3f90da1e315a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLr1SwR-EqpX3Tu5BXKv-nM5AG2ML2LyPzglirfWlcPY7~dTnd2S837lrXfzpO81BqWkziXs6eMWz7BWD6tO-AJ9wR~CSH6CQg13JAmJvvKoGtUKGMtyErGwHe1UMNkZAyHx40M6E8Qe9zMYjuihP9L4ZlEa2SUnlXAzH2EhcHU8XDbTmJbINCkHxNIDyx-Z0m~~TNUKH3E48iOnam4egdUB3f7O3cNpAHIX97b8ShGtLYl9OmatRiLtcM-Av8HMHaiEHpPmIZ6gYLPyEznDhC8Q2N0RFFcxF9F1GM5Qsee4Uz7PnUb3hzizx~NvDvqHAe6Sx3dcp8OeAJtrr~wfFg__",
            text: "No coffee for me after lunch, or I’ll be up till sunrise"
        },
        {
            avatar : "https://s3-alpha-sig.figma.com/img/dc17/48c7/c9a9cc1158ec1f34860b53ee583176b0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8mO6SndTvzOoz3rluupDz9F8SIZSTLHp9TNuBV4vWQvh5GnxFU91PkkgJBOQK7B3n26gZt~Gcswd74XSDuBuonZm4CXCJWmE3EAcgjENDRE1j3EnjU~shhjSJxkZh4BJOJ1jEl9AS26~mrJ0uECgtAqOhdTQsryKTeetvt8I7UbMAF2-WeVj913-rbmwvkUgTJ3NBFVJioGS8nIZE6ZWj5YV8g4IX8OgkfhaAtq1TRcI~L9ti~HuHmM3ubNs9PXOc0v6piFsKk~KNC0fTXp0WDhKkV~xNP05iV0RPfQu9FuvsD3tJomYLlZmNZERiAs0Ys6gLF3lzwBwb6r6IFnqQ__",
            text: "No coffee for me after lunch, or I’ll be up till sunrise"
        },

    ]
    return(
        <Box sx={{height : "100%", px : 8 , overflowX: "auto"}}>
            {list.map((item , indx) => <TweetItems key={indx} avatar={item.avatar} text={item.text}/>)}
        </Box>
    )
}

export default TweetList