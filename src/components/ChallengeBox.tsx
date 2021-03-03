import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext'
 
export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge()
        resetCountdown()
    }
    
      function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                    <button 
                        className={styles.challengeFailedButton} 
                        type="button"
                        onClick={handleChallengeFailed}
                        >
                        Falhei
                        </button>
                        <button 
                        className={styles.challengeSucceededButton} 
                        type="button"
                        onClick={handleChallengeSucceded}
                        >
                        Completei
                        </button>
                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafos.
                </p>
            </div>
            )}
        </div>
    )
}