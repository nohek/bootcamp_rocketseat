import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react'
import '../styles/repositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]); 

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
    
    return (
        <section className="repository-list">
        <h1>Lista de repositórios da fran</h1>

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} 
                repository={repository} />
            })}
        </ul>
        </section>
    );
}