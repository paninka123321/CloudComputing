// useUserRole.js (hook do pobierania roli)
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const useUserRole = () => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRole = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                const db = getFirestore();
                const userRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setRole(docSnap.data().role);
                }
            }
            setLoading(false);
        };

        fetchRole();
    }, []);

    return { role, loading };
};

export default useUserRole;
