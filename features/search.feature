Feature: Search a course
    Scenario: successful booking
        Given User is on "/client/index.php" page
        When The user chooses the day "a:nth-child(2)"
        When The user chooses the time ".movie-seances__time[href='#'][data-seance-id='199']"
        When The user chooses a location "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(10)"
        When The user confirms the choice of location ".acceptin-button"
        Then The user sees the ticket receipt button ".acceptin-button"
    
    Scenario: successful booking 2
        Given User is on "/client/index.php" page
        When The user chooses the day "body nav[class='page-nav'] a:nth-child(6) span:nth-child(1)"
        When The user chooses the time ".movie-seances__time[href='#'][data-seance-id='217']"
        When The user chooses a location "div:nth-child(5) span:nth-child(8)"
        When The user confirms the choice of location ".acceptin-button"
        Then The user sees the ticket receipt button ".acceptin-button"
    
    Scenario: unsuccessful booking
        Given User is on "/client/index.php" page
        When The user chooses the day "body nav[class='page-nav'] a:nth-child(6) span:nth-child(1)"
        When The user chooses the time ".movie-seances__time[href='#'][data-seance-id='217']"
        When The user chooses a location "div:nth-child(5) span:nth-child(8)"
        Then The place is already occupied, the button is not clickable ".acceptin-button"
        