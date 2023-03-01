import React from "react";

export interface rawData {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date?: string;
  published_date: string;
  material_type_facet?: string;
  kicker?: string;
  des_facet?: [];
  org_facet?: [];
  per_favet?: [];
  geo_facet?: [];
  multimedia?: {
    url?: string;
    height?: string;
    width?: string;
    type?: string;
    subtype?: string;
    caption?: string;
    copyright?: string
  }[];
  short_url?: string;
}