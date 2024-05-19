<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SearchController extends Controller
{
     public function index($searchText)
    {

        $text = $searchText;
        $client = new Client();
        $response = $client->request('GET', 'https://www.googleapis.com/customsearch/v1', [
            'query' => [
                'key' => 'AIzaSyBVH31n7_s9RWt7gbb15lHpqG07y-wk-6I',
                'cx' => 'd09cf1c841863460c',
                'q' => $text
            ]
        ]);

        return response()->json(json_decode($response->getBody()->getContents()));

        
        // return response()->json($text);
    }
}
