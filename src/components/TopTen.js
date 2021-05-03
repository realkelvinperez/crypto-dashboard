import { useEffect, useState } from "react"
import LongCard from "../LongCard";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  padding-bottom: 5rem
`

export default function TopTen() {
    const [top10, setTop10] = useState([])

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
           const res = await axios(url)
            setTop10(res.data)
            console.log({res})
    }, [url])

    return (
        <Wrapper>
            <Heading
                marginBottom="1rem"
                marginLeft="1rem"
            >
                Top 20 Cryptocurrencies
            </Heading>
            {top10.map((x, i) => {
                let color;
                const {price_change_percentage_24h, current_price, name } = x
                const isPositive = Math.sign(price_change_percentage_24h)  > 0
                if(isPositive) color = "#25AB4B"
                else color = "#AB2525"
                return (
                    <LongCard
                        key={i}
                        name={name}
                        percentChange={price_change_percentage_24h.toFixed(2)}
                        price={`$${(current_price).toLocaleString('en')}`}
                        ticker={x.symbol.toUpperCase()}
                        color={color}
                        isPositive={isPositive}
                    />
                )
            })}
        </Wrapper>
    );
}

