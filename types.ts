import { type } from "os"

export type AuthorsType = Array<{
    "name": string,
    "birth_year": number,
    "death_year": number
}>
type FormatsType = {
    "application/x-mobipocket-ebook": string,
    "application/epub+zip": string,
    "application/rdf+xml": string,
    "text/html; charset=utf-8": string,
    "text/plain; charset=utf-8": string,
    "image/jpeg": string,
    "text/html": string
}
export type OneBookData = {
    "id": number,
    "title": string,
    "authors": AuthorsType,
    "translators": [],
    "subjects": string[],
    "bookshelves": string[],
    "languages": string[],
    "copyright": boolean,
    "media_type": string,
    "formats": FormatsType,
    "download_count": number
}
export type BooksData = Array<OneBookData>

export type Data = {
    count: number,
    next: string,
    previous: null | string,
    results: BooksData
}

export type BookInfoType = {
    id?: number,
    image: string,
    title: string,
    author: AuthorsType,
    down_count: number,
}