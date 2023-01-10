import styles from "./autocomplete.module.scss";

interface AutocompleteProps {
    suggestions: {
        name: string;
        domain: string;
        logo: string;
    }[] | undefined;
    setSelected: Function;
}

export const AutocompleteName: React.FC<AutocompleteProps> = ({ suggestions, setSelected }) => { 

    return(
        <>
            {
                suggestions && 
                <ul className={styles.suggestionList}>
                {
                    suggestions?.map((suggestion) => (
                        <li 
                            className={styles.suggestionListItem} 
                            key={suggestion.domain} 
                            title={`${suggestion.name}`} 
                            onClick={(e) => setSelected(e, suggestion.name, suggestion.logo)}
                        >
                            <img src={suggestion.logo} alt={`${suggestion.name}`} />
                            <span>{suggestion.name}</span>
                        </li>
                    ))
                }
                </ul>
            }
        </>
    )
}