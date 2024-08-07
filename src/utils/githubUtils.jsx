// src/utils/githubUtils.jsx
const GITHUB_RAW_CONTENT_URL = 'https://raw.githubusercontent.com/Blackswitch-Tech/static/main/sipmt';

export const getGithubRawUrl = (path) => `${GITHUB_RAW_CONTENT_URL}/${path}`;