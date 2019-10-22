import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonProgressBar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonRouterOutlet, IonItemDivider, IonItemGroup } from '@ionic/react';
import { 
  workout,
  exercise,
  set
 } from "../types/workout";
import { service, status } from '../types/service';
import { Route } from 'react-router';
import Details from './Details';

const Home: React.FC = () => {
  const [workoutsService, setWorkoutsService] = useState<service<workout[]>>({
    payload: undefined, 
    status: 'loading',
  });
  
  useEffect(() => {
    const getWorkouts = async () => {
      const userWorkouts: workout[] =[
        {
          name: 'default',
          exercises: [
            {
              name: 'bench',
              sets: [
                {
                  weight: 135,
                  reps: 15
                }
              ]
            },
            {
              name: 'squat',
              sets: [
                {
                  weight: 215,
                  reps: 5
                },
                {
                  weight: 300,
                  reps: 3
                },
                {
                  weight: 315,
                  reps: 1
                }
              ]
            }
          ]
        }
      ];

      // Fake wait for api
      await (new Promise((resolve) => setTimeout(() => resolve(), 1000)));
      setWorkoutsService({
        status: "loaded", 
        payload: userWorkouts,
      });
    };
    getWorkouts();
  }, []);

  if (workoutsService.status === 'loading') {
    return <IonProgressBar type="indeterminate" ></IonProgressBar>;
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <WorkoutListItems workouts={workoutsService.payload} />
      </IonContent>
    </IonPage>
  );
};

interface workoutListItemsProps {
  workouts?: workout[];
}

const WorkoutListItems: React.FC<workoutListItemsProps> = (props: workoutListItemsProps) => {
  
  const items = (workouts?: workout[]) => workouts ? workouts.map((workout, index) => {
    return (
      <>
      <IonRouterOutlet>
        <Route 
          path="/workout/:workout" 
          component={Details} 
          exact={true} / >
      </IonRouterOutlet>
      <IonCard 
        button={true}
        href={`/workout/${workout.name}`}
      >
        <IonCardHeader>
          <IonCardTitle>
            {workout.name}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {workout.exercises.map(exercise => (
              <IonItem>
                <IonLabel>
                  {exercise.name}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
      </>
    )
  }) : (<></>);
  return <IonList>{items(props.workouts)}</IonList>
}

export default Home;