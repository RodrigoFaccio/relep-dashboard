import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.weptek.app/api/v1',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NWM2MWExLWY4MTEtNGM0Zi1iMzQ1LWY5NWU5NjA5NDU0MiIsInR5cGUiOiJsaWNlbnNlZCIsImlhdCI6MTY4Mjg2MzI3MSwiZXhwIjoxNjgyODY2ODcxfQ.NoYa4qywi4koYivGck2X22mymVG-Osk-WK-lfC0PKSo',
    'X-Chevette-Key': 'e8603e17-30a7-4de4-95a7-8d5ad97fdddf',
    'Cache-Control': 'no-cache'
  }
});

