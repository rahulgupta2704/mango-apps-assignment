Feature: Mango apps basic flow
    Background: Login
        Given I am logged in

    Scenario: Share an update
        When I share an update
        Then the update should get shared