

import { NextResponse } from "next/server";

let locales = ['bn','en'];
let defaultLocale = 'en';

function getLocale(request) {
    const acceptedLanguage = request.headers.get('accept-language') || '';
    const language = acceptedLanguage.split(',')[0].split('-')[0];
    return locales.includes(language) ? language : defaultLocale;
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = !locales.some(
        (locale) => pathname.startsWith(`/${locale}`)
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|assets|.*\\..*|_next).*)'
    ],
}
