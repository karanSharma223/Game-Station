import { ProductCard,Product } from "@/types";
import { createClient, groq } from "next-sanity"



const config = {
    projectId: 'ckdcnme9',
    dataset: 'production',
}

export async function getPopularGames(): Promise<ProductCard[]> {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "game" && sales > 600] | order(sales desc)[0...10]{
            _id,
            name,
            buy_price,
            "slug": slug.current,
            "image": image.asset->url,
        }`
            
    )
}

export async function getLatestGames(): Promise<ProductCard[]> {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "game" ] | order(release desc)[0...10]{
            _id,
            name,
            buy_price,
            "slug": slug.current,
            "image": image.asset->url,
        }`
            
    )
}

export async function getSimilarGames(reqGenre: string[]): Promise<ProductCard[]> {
    const client = createClient(config);
    const query = groq`*[_type == "game" &&  $reqGenre[0] in genre][0...10]{
        _id,
        name,
        buy_price,
        "slug": slug.current,
        "image": image.asset->url,
    }`
    return client.fetch(query, {reqGenre});
}

export async function getGameFromSlug(reqSlug: string): Promise<Product> {
    const client = createClient(config);
    const query = groq`*[_type == "game" && slug.current == $reqSlug][0]{
        _id,
        name,
        sell_price,
        "slug": slug.current,
        "image": image.asset->url,
        buy_price,
        details,
        platform,
        developer,
        og_price,
        genre,
        rating
    }`
    return client.fetch(query, {reqSlug});
}

export async function getCartGame(reqId: string): Promise<ProductCard> {
    const client = createClient(config);
    const query = groq`*[_type == "game" && _id == $reqId][0]{
        _id,
        name,
        buy_price,
        "slug": slug.current,
        "image": image.asset->url,
    }`
    return client.fetch(query, {reqId});
}

export async function getPS4Games(): Promise<ProductCard[]> {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "game" && platform == "PS4"] | order(sales desc)[0...10]{
            _id,
            name,
            buy_price,
            "slug": slug.current,
            "image": image.asset->url,
        }`
            
    )
}

export async function getPS5Games(): Promise<ProductCard[]> {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "game" && platform == "PS5"] | order(sales desc)[0...10]{
            _id,
            name,
            buy_price,
            "slug": slug.current,
            "image": image.asset->url,
        }`
            
    )
}


