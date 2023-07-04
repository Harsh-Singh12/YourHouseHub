import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import {IoReloadCircle} from 'react-icons/io5'
import '../styles/offers.css';
import { useParams } from "react-router-dom";
import { db } from "./../firebaseConfig";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Spinner from "../Components/Spinner";
import ListingItem from "../Components/ListingItem";


const Offers = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);
  //fetch listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        // reference
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        // execute query
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Unable to fatch data");
      }
    };
    fetchListing();
  }, []);
  const fetchLoadMoreListing = async () => {
    try {
      // reference
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );
      // execute query
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListing((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fatch data");
    }
  };

  return (
    <Layout title="best offer on house">
      <div className="offers pt-3  container-fluid">
        <h1> 
          {" "}
          <img 
          src ="/assets/offer.png"
          alt ="offers"
          className="offer-img"
          />{" "}
        Best Offers
        </h1>
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
          <>
            <div>
              {listing.map((list) => (
                <ListingItem listing={list.data} id={list.id} key={list.id} />
              ))}
            </div>
          </>
        ) : (
          <p>There Are No Current Offers</p>
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
        {lastFetchListing && (
          <button
            className="load-btn" onClick={fetchLoadMoreListing}>
            <IoReloadCircle /> 
            load more
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Offers;
