import http from 'k6/http';
import { sleep, group } from 'k6';

export const options = {
    vus: 10000, // 10 virtual users
    duration: '30m', // Test duration of 1 minute
};

export default function () {
    const researchId = 'research-id-123';
    const distributionId = 'distribution-id-456';
    const userId = 'user-id-789';
    const vote = 8;

    group('Create Research', () => {
        createResearch();
    });

    group('Get All Researches', () => {
        getAllResearches();
    });

    group('Get Research by ID', () => {
        getResearchById(researchId);
    });

    group('Upload Distribution', () => {
        uploadDistribution();
    });

    group('Get All Distributions', () => {
        getAllDistributions();
    });

    group('Get Distribution by ID', () => {
        getDistributionById(distributionId);
    });

    group('Vote Research', () => {
        voteResearch(userId, vote);
    });

    group('Calculate NPS', () => {
        calculateNPS(researchId);
    });

    group('Distribute Research', () => {
        distributeResearch(distributionId);
    });

    sleep(1); // Add a small delay between requests
}

function createResearch() {
    const url = 'http://localhost:3000/research';
    const payload = {
        title: 'Pesquisa de Satisfação',
    };
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = http.post(url, JSON.stringify(payload), params);
    console.log('Create Research Response:', res.json());
}

function getAllResearches() {
    const url = 'http://localhost:3000/research';
    const res = http.get(url);
    console.log('Get All Researches Response:', res.json());
}

function getResearchById(id) {
    const url = `http://localhost:3000/research/${id}`;
    const res = http.get(url);
    console.log('Get Research by ID Response:', res.json());
}

function uploadDistribution() {
    const url = 'http://localhost:3000/distribution';
    const filePath = 'backend/teste.csv';
    const payload = {
        channel: 'email',
        researchId: researchId,
    };
    const params = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const formData = {
        file: http.file(filePath, 'file.csv', 'text/csv'),
        uploadDto: JSON.stringify(payload),
    };
    const res = http.post(url, formData, params);
    console.log('Upload Distribution Response:', res.json());
}

function getAllDistributions() {
    const url = 'http://localhost:3000/distribution';
    const res = http.get(url);
    console.log('Get All Distributions Response:', res.json());
}

function getDistributionById(id) {
    const url = `http://localhost:3000/distribution/${id}`;
    const res = http.get(url);
    console.log('Get Distribution by ID Response:', res.json());
}

function voteResearch(id, vote) {
    const url = `http://localhost:3000/research/vote/${id}/${vote}`;
    const res = http.get(url);
    console.log('Vote Research Response:', res.json());
}

function calculateNPS(id) {
    const url = `http://localhost:3000/research/calculate/${id}`;
    const res = http.get(url);
    console.log('Calculate NPS Response:', res.json());
}

function distributeResearch(id) {
    const url = `http://localhost:3000/distribution/distribute/${id}`;
    const res = http.get(url);
    console.log('Distribute Research Response:', res.json());
}